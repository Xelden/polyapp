{ pkgs
, dependencies
, poetryEnv
}:

pkgs.mkShell {
  packages =
    let
      base = with pkgs; [
        python311
        nodePackages_latest.pyright
        poetry
        python311Packages.pip
      ];

      depsList = builtins.concatLists (builtins.attrValues dependencies);
    in
    base ++ depsList ++ [ poetryEnv ];
}
