"use client"
import React from 'react';
import { UserIcon, ChartBarIcon, CurrencyDollarIcon, ArrowTrendingUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faListCheck } from '@fortawesome/free-solid-svg-icons';
import ItemCard from '@/components/dashboard/item-card';

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
    labels: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"],
    datasets: [
      {
        label: "Receitas",
        data: [12000, 19000, 3000, 5000, 2000, 3000, 10000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const getIcon = (key: string) => {
    switch (key) {
      case "totalUsers":
        return <UserIcon className="w-6 h-6 mr-2 text-blue-500" />;
      case "activeUsers":
        return <ArrowTrendingUpIcon className="w-6 h-6 mr-2 text-green-500" />;
      case "inactiveUsers":
        return <ArrowTrendingUpIcon className="w-6 h-6 mr-2 text-red-500" />;
      case "revenue":
        return <CurrencyDollarIcon className="w-6 h-6 mr-2 text-green-500" />;
      case "expenses":
        return <CurrencyDollarIcon className="w-6 h-6 mr-2 text-red-500" />;
      default:
        return <ChartBarIcon className="w-6 h-6 mr-2 text-blue-500" />;
    }
  };
  const getTitle = (key: string) => {
    switch (key) {
      case "totalUsers":
        return "Usuários";
      case "activeUsers":
        return "Usuários ativos";
      case "inactiveUsers":
        return "Usuários inativos";
      case "revenue":
        return "Receitas";
      case "expenses":
        return "Despesas";
      default:
        return "Desconhecido";
    }
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">

        {Object.entries(summaryData).map(([key, value]) => (
          <ItemCard
            key={key}
            title={getTitle(key)}
            icon={getIcon(key)}
            value={value}
            href={key === "revenue" || key === "expenses" ? "/sales" : `/${key}`}
          />
        ))}

      </div>
      <hr className='border-[1px] border-gray-300 my-6' />

      <div className="flex gap-2 justify-between">
        <div className='grid grid-cols-2 gap-2'>
          <div className='p-2 rounded-md bg-white'>
            <h1 className='font-bold text-sky-800 p-1 mb-1 text-lg'> <FontAwesomeIcon icon={faDollarSign} /> Receitas do mês</h1>
            <Line
              options={options}
              data={data}
            />
          </div>
          <div className='p-2 rounded-md bg-white'>
            <h1 className='font-bold text-sky-800 p-1 mb-1 text-lg'> <FontAwesomeIcon icon={faDollarSign} /> Despesas do mês</h1>
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
