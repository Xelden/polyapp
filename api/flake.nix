{
  description = "Template flake for Poetry projects.";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    poetry2nix.url = "github:nix-community/poetry2nix";
  };

  outputs =
  { self
  , nixpkgs
  , flake-utils
  , poetry2nix
  , ...
  } @inputs:
    let
      inherit (self) outputs;
    in
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        p2n = poetry2nix.lib.mkPoetry2Nix { inherit pkgs; };

        projectOptions = {
          projectDir = self;
          preferWheels = true;
        };

        dependencies = with pkgs; {
          build = [ ];
          run = [ sqlite ];
          test = [ ];
        };

        poetryEnv = p2n.mkPoetryEnv projectOptions;

        poetryApp = p2n.mkPoetryApplication (projectOptions // {
          nativeBuildInputs = dependencies.build;
          propagatedBuildInputs = dependencies.run;
          nativeCheckInputs = dependencies.test;
        });
      in
      {
        packages = {
          container = pkgs.dockerTools.buildLayeredImage {
            name = "api-polimeros";
            tag = "latest";
            contents = [ poetryApp ];
            config.Cmd = [ "${poetryApp}/bin/api-polimeros" ];
          };
          default = poetryApp;
        };
        devShells.default = pkgs.callPackage ./shell.nix { inherit dependencies poetryEnv; };
      }
    );
}
