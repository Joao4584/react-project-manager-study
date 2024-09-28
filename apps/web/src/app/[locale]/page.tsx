"use client";

import { DivEffect } from "@/utils/motion/Effects";
import React from "react";

export default function HomePage() {
    return (
        <main className="grid min-h-full px-6 p-10 lg:px-8">
            <div className="text-left">
                <DivEffect>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl">
                        Gerenciador de Projetos de Estudos
                    </h1>
                </DivEffect>
                <DivEffect delay={0.1}>
                   <React.Fragment>
                    <p className="mt-6 text-base leading-7 text-gray-400">
                          Este projeto é um gerenciador de projetos de estudos, desenvolvido para ajudar estudantes a organizarem e visualizarem seus projetos em React.
                      </p>
                   </React.Fragment>
                </DivEffect>
                <DivEffect delay={0.2}>
                    <React.Fragment>
                      <h2 className="mt-8 text-2xl font-semibold text-gray-800 dark:text-gray-300">
                          Tecnologias Utilizadas
                      </h2>
                      <ul className="mt-4 list-disc list-inside text-gray-400">
                          <li><strong>React:</strong> Biblioteca JavaScript para construir interfaces de usuário.</li>
                          <li><strong>Next.js:</strong> Framework para React que facilita o desenvolvimento de aplicações com renderização do lado do servidor.</li>
                          <li><strong>Tailwind CSS:</strong> Framework de CSS utilitário que permite estilizar rapidamente a aplicação.</li>
                          <li><strong>Turborepo:</strong> Ferramenta que facilita o gerenciamento de monorepos, permitindo uma organização eficiente do código.</li>
                          <li><strong>Next International:</strong> Biblioteca que oferece suporte à internacionalização, permitindo a tradução da aplicação para diferentes idiomas.</li>
                      </ul>

                    </React.Fragment>
                </DivEffect>
            </div>
        </main>
    );
}
