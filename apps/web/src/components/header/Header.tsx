'use client';

import { useI18n } from "@/locale/client";
import { RefreshCcw, Bell, Star, Wifi } from "lucide-react"; // Importando os ícones necessários
import Image from "next/image";

export const HeaderDashboard = () => {
  const t = useI18n();

  return(
    <ul className="bg-gray-header bg-opacity-50  w-full h-16 px-1 flex justify-center items-center">
      <div className="flex justify-between items-center w-full ">

          <li className="w-48">
            <Image  src="/logo/icon-study.png" alt="" className="w-32 filter brightness-150 p-1 grayscale " width={200} height={65} />
          </li>
          <li className="bg-gray-header-input bg-opacity-50 border-gray-700 border p-2.5 px-4 rounded-lg flex justify-between shadow-inner gap-6 cursor-default">
              <a href="https://github.com/Joao4584/react-project-manager-study"> {t("dashboard.header.document")}</a>
          </li>
          <li className="flex items-center gap-8">
            <div className="flex gap-2">
              <button className="bg-gray-btn-card border-gray-700 hover:bg-slate-600 transition-colors border p-2 rounded-md flex items-center">
                  <Bell className="w-4 h-4" />
              </button>
              <button className="bg-gray-btn-card border-gray-700 hover:bg-slate-600 transition-colors border p-2 rounded-md flex items-center">
                <Star className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 mr-6  ">
              <div className="text-slate-200">
                <div className="text-sm font-medium">Joao4584</div>
                <div className="text-sm text-gray-400 flex ">
                  Status: <Wifi className="w-4 h-4 ml-1.5 mt-0.5 text-green-600" />
                </div> 
              </div>
              <Image
                src="/examples/image-default-user.jpg" alt="User Logo"
                width={40} 
                height={40}
                className="w-10 h-10 rounded-lg border-2 border-indigo-400" 
              />
            
            </div>
          
          </li>
      </div>
    </ul>
  )
}