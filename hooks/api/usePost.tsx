import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export function usePostAPI() {
  const toast = useToast();

  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const postAPI = async (URL: string, body, config) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${URL}`,
        body,
        config
      );
      if (res.status === 200) return res.data;
      else {
        setError(error);
        console.log(res);
        toast({
          title: "Une erreur est survenue",
          description: res.statusText,
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Une erreur est survenue",
        description: "Une erreur est survenue",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  return { postAPI, error, loading };
}
