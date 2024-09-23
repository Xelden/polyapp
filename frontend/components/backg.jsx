//(Y: izquierda abajo Y: izquierda arriba, ancho total Y: derecha arriba )
//(Ancho en X, Bottom de X derecha, Bottom de izquierda)

export default function FondoAzul (){
  return (
    <div
      style={{
        backgroundColor: '#112D4E',
        position: "absolute",
        zIndex: -1,
        height: '100vh',
        width: '100vw',
        clipPath: 'polygon(100% 0%, 0% 0%, 0% 70%, 100% 45%)',
      }}
    />
  );
}
