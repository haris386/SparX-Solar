"use client";

export default function Home() {
  return (
    <main
      style={{
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Welcome to Next.js!
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "600px", textAlign: "center" }}>
        This is a simple landing page similar to the default page that shows up
        when you create a new Next.js app using <code>create-next-app</code>.
      </p>

      <a
        href="https://nextjs.org/docs"
        target="_blank"
        style={{
          padding: "0.8rem 1.5rem",
          background: "black",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        Learn Next.js
      </a>
    </main>
  );
}
