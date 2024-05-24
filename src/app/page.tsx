"use client";
import Image from "next/image";
import Button from "@mui/material/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">
        Slack 2.0
      </h1>

      <Button variant="contained" color="primary" className="bg-green-500 text-white">
        Get started
      </Button>
    </main>
  );
}
