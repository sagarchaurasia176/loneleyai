// import StartCall from "@/components/StartCall";
// import Messages from "@/components/Messages";

import { fetchAccessToken } from "hume";
import { VoiceProvider } from "@humeai/voice-react";
import { InferGetServerSidePropsType } from "next";
import StartCall from "../components/StartCall";
import Messages from "../components/Messages";

export const getServerSideProps = async () => {
  try {
    const accessToken = await fetchAccessToken({
      apiKey: String(process.env.HUME_API_KEY),
      secretKey: String(process.env.HUME_SECRET_KEY),
    });

    return {
      props: {
        accessToken,
      },
    };
  } catch (error) {
    console.error("Failed to fetch access token:", error);
    throw error;
  }
};

type PageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export default function Page({ accessToken }: PageProps) {
  return (
    <div className={"grow flex flex-col"}>
    </div>
  );
}
