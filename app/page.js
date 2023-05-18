export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          textAlign: "center",
          margin: "6rem auto 0 auto",
          maxWidth: "600px",
          alignItems: "center",
        }}
      >
        <h1>
          <span>joy</span>machine
        </h1>
        <h2 style={{ maxWidth: "65%" }}>
          Building positive human computer interactions since <span>2015</span>
        </h2>
      </div>
    </main>
  );
}
