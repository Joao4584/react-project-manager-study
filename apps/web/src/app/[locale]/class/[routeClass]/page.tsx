"use client";

import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import NotFoundPage from "../../[...rest]/page";
import { defaultClass } from "./defaultClass";



export default function HomePage() {
  const [container, setContainer] = useState<any>(null);
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const pathname = usePathname();
  const classRouteFragment = (pathname.split(`/class/`)[1] || '');

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
    }).catch(err => {
      console.error('Erro ao copiar URL: ', err);
    });
  };

  useEffect(() => {
    const classData = defaultClass[classRouteFragment as keyof typeof defaultClass];

    if (classData) {
      setContainer(
        <React.Fragment>
          <header className="flex justify-between items-center mb-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <div>
              <h1 className="text-3xl font-bold">{classData.title}</h1>
              <p className="text-gray-400">Número da aula: {classRouteFragment}</p>
            </div>
            <button
              onClick={() => copyToClipboard(currentUrl)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Copiar URL
            </button>
          </header>
          <main className="flex-grow bg-gray-800 rounded-lg p-4 overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="min-h-20 bg-gray-700 rounded-lg p-2 overflow-auto">
                <p className="text-gray-300">Descrição da aula: {classData.description}.</p>
              </div>
              <div className="mt-4">
                {/* Header for the iframe URL */}
                <h2 className="text-lg font-semibold mt-2">{currentUrl || classData.access}</h2>
                <iframe
                  src={classData.access}
                  title="Project Iframe"
                  className="w-full border-none rounded-lg shadow-lg"
                  style={{ height: "42rem" }}
                  onLoad={(e) => {
                    const iframe = e.currentTarget;
                    const handleMessage = (event: MessageEvent) => {
                      if (event.origin === new URL(classData.access).origin) {
                        setCurrentUrl(event.data);
                      }
                    };
                    window.addEventListener('message', handleMessage);
                    return () => {
                      window.removeEventListener('message', handleMessage);
                    };
                  }}
                ></iframe>
              </div>
            </div>
          </main>
        </React.Fragment>
      );
    } else {
      setContainer(<NotFoundPage />);
    }

  }, [classRouteFragment]);

  return (
    <div className="flex flex-col h-full p-4 bg-gray-900 text-white">
      {container}
    </div>
  );
}
