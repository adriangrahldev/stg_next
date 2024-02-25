"use client"
import React from 'react';
import { UserIcon, ChartBarIcon, CurrencyDollarIcon, ArrowTrendingUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faListCheck } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

export default function Dashboard() {
  const summaryData = {
    totalUsers: 1000,
    activeUsers: 800,
    inactiveUsers: 200,
    revenue: 50000,
    expenses: 30000,
  };

  const calculatePercentage = (value: number, total: number) => {
    return ((value / total) * 100).toFixed(2);
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [
      {
        label: "Ingresos",
        data: [12000, 19000, 3000, 5000, 2000, 3000, 10000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };


  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <Link href={'/users'} className="bg-white p-4 rounded-lg  shadow-sm hover:translate-y-[-2px] border-s-4 border-blue-300 hover:border-blue-800">
          <div className="flex items-center">
            <UserIcon className="w-6 h-6 mr-2 text-blue-500" />
            <h3 className="text-lg font-medium">Total de Usuários</h3>
          </div>
          <p className="text-gray-600">{summaryData.totalUsers}</p>
        </Link>

        <Link href={'/users'} className="bg-white p-4 rounded-lg  shadow-sm hover:translate-y-[-2px] border-s-4 border-blue-300 hover:border-blue-800">
          <div className="flex items-center">
            <ChartBarIcon className="w-6 h-6 mr-2 text-green-500" />
            <h3 className="text-lg font-medium">Usuários Ativos</h3>
          </div>
          <p className="text-gray-600">{summaryData.activeUsers}</p>
        </Link>

        <Link href={'/users'} className="bg-white p-4 rounded-lg  shadow-sm hover:translate-y-[-2px] border-s-4 border-blue-300 hover:border-blue-800">
          <div className="flex items-center">
            <ChartBarIcon className="w-6 h-6 mr-2 text-red-500" />
            <h3 className="text-lg font-medium">Usuários Inativos</h3>
          </div>
          <p className="text-gray-600">{summaryData.inactiveUsers}</p>
        </Link>

        <Link href={'/users'} className="bg-white p-4 rounded-lg  shadow-sm hover:translate-y-[-2px] border-s-4 border-blue-300 hover:border-blue-800">
          <div className="flex items-center">
            <CurrencyDollarIcon className="w-6 h-6 mr-2 text-yellow-500" />
            <h3 className="text-lg font-medium">Receita</h3>
          </div>
          <p className="text-gray-600">${summaryData.revenue}</p>
        </Link>

        <Link href={'/users'} className="bg-white p-4 rounded-lg  shadow-sm hover:translate-y-[-2px] border-s-4 border-blue-300 hover:border-blue-800">
          <div className="flex items-center">
            <CurrencyDollarIcon className="w-6 h-6 mr-2 text-red-500" />
            <h3 className="text-lg font-medium">Despesas</h3>
          </div>
          <p className="text-gray-600">${summaryData.expenses}</p>
        </Link>

        <Link href={'/users'} className="bg-white p-4 rounded-lg  shadow-sm hover:translate-y-[-2px] border-s-4 border-blue-300 hover:border-blue-800">
          <div className="flex items-center">
            <ArrowTrendingUpIcon className="w-6 h-6 mr-2 text-green-500" />
            <h3 className="text-lg font-medium">Margem de Lucro</h3>
          </div>
          <p className="text-gray-600">{calculatePercentage(summaryData.revenue - summaryData.expenses, summaryData.revenue)}%</p>
        </Link>
      </div>
      <hr className='border-[1px] border-gray-300 my-6' />

      <div className="flex gap-2 justify-between">
        <div className='grid grid-cols-2 gap-2'>
          <div className='p-2 rounded-md bg-white'>
            <h1 className='font-bold text-sky-800 p-1 mb-1 text-lg'> <FontAwesomeIcon icon={faDollarSign} /> Ingresos do mes</h1>
            <Line
              options={options}
              data={data}
            />
          </div>
          <div className='p-2 rounded-md bg-white'>
            <h1 className='font-bold text-sky-800 p-1 mb-1 text-lg'> <FontAwesomeIcon icon={faDollarSign} /> Gastos del mes</h1>
            <Bar
              options={options}
              data={data}
            />
          </div>
        </div>
        </div>
        
    </div>
  );
}
