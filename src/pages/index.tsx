import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Home() {
  const [intentUrl, setIntentUrl] = useState("");

  const onLaunchPressed = () => {
    window.location = intentUrl as string & Location;
  };

  return (
    <>
      <Head>
        <title>Enstack Intent Tester</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col">
          <label>Intent URL</label>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Enter intent url"
              value={intentUrl}
              onChange={(e) => setIntentUrl(e.target.value)}
            />
            <Button onClick={onLaunchPressed}>Launch</Button>
          </div>
        </div>
      </main>
    </>
  );
}
