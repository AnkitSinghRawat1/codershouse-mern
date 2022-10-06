import { useCallback, useEffect, useRef, useState } from "react";
import { useStateWithCallback } from "./useStateWithCallback";

export const useWebRTC = (roomId, user) => {
  const [clients, setClients] = useStateWithCallback([]);

  const audioElements = useRef({});
  const connections = useRef({});
  const localMediaStream = useRef(null);

  const provideRef = (instance, userId) => {
    audioElements.current[userId] = instance;
  };

  // add new Clients

  const addNewClients = useCallback((newClient, cb)=>{
    const lookingFor = clients.find((client) => client.id === newClient.id)
  }, [clients, setClients])

  // capture media
  useEffect(() => {
    const startCapture = async () => {
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    };

    startCapture().then(() => {
      addNewClients(user, () => {
        const localElement = audioElements.current[user.id]
        if(localElement){
          // localElement.volume = 0
          localElement.secObject = localMediaStream.current
        }
      })
    })
  }, []);

  return { clients, provideRef };
};
