import { FormEvent, useState } from "react";
import { Input, Container, Button, Text } from "@mantine/core";
import Head from "next/head";
import axios from "axios";

export default function Home() {
  const [registerCommandsKey, setRegisterCommandsKey] = useState<string>("");
  const [status, setStatus] = useState<string>("🤖 Hello there!");

  const handleRegisterCommand = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setStatus("Loading...");
      await axios.get(`/api/discord-bot/register-commands?MMVKEY=${registerCommandsKey}`);
      setStatus("Commands Registered!!!");
    } catch (error) {
      setStatus("Something wen't wrong ");
    }
  };

  return (
    <>
      <Head>
        <title>MMV | Nextjs Discord Bot Template</title>
      </Head>
      <main>
        <Container size='xs' px='xl' my='lg'>
          <Text
            variant='gradient'
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            sx={{ fontFamily: "Greycliff CF, sans-serif" }}
            ta='center'
            fz='xl'
            fw={700}
          >
            MMVeragara Dev Website API
          </Text>
          <form onSubmit={handleRegisterCommand}>
            <Input
              radius='xs'
              placeholder='MMV KEY'
              value={registerCommandsKey}
              onChange={(e) => setRegisterCommandsKey(e.target.value)}
            />
            <Button color='cyan' type='submit' mt={8}>
              Register Commands
            </Button>{" "}
            <span>{status}</span>
          </form>
        </Container>
      </main>
    </>
  );
}
