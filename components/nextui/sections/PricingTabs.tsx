import React from "react";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";

// IMPORTANT: Includes React functionality
// <!-- Pricing toggle -->
// <div class="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
//     <div class="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
//         <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
//             <span class="absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out" :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
//         </span>
//         <button class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out" :class="isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'" @click="isAnnual = true" :aria-pressed="isAnnual">Yearly <span :class="isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'">-20%</span></button>
//         <button class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out" :class="isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'" @click="isAnnual = false" :aria-pressed="isAnnual">Monthly</button>
//     </div>
// </div>

export const PricingToggle = () => (
  <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
    <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
      <span
        className="absolute inset-0 m-1 pointer-events-none"
        aria-hidden="true"
      >
        <span className="absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"></span>
      </span>
      <button className="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out">
        Yearly <span>-20%</span>
      </button>
      <button className="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out">
        Monthly
      </button>
    </div>
  </div>
);

export const PricingTab1 = () => (
  <div className="h-full">
    <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
      <div className="mb-5">
        <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
          Essential
        </div>
        <div className="inline-flex items-baseline mb-2">
          <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
            $
          </span>
          <span
            className="text-slate-900 dark:text-slate-200 font-bold text-4xl"
            x-text="isAnnual ? '29' : '35'"
          >
            29
          </span>
          <span className="text-slate-500 font-medium">/mo</span>
        </div>
        <div className="text-sm text-slate-500 mb-5">
          There are many variations available, but the majority have suffered.
        </div>
        <a
          className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
          href="#0"
        >
          Purchase Plan
        </a>
      </div>
      <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
        Includes:
      </div>
      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Unlimited placeholder texts</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Consectetur adipiscing elit</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Excepteur sint occaecat cupidatat</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Officia deserunt mollit anim</span>
        </li>
      </ul>
    </div>
  </div>
);

export const PricingTab2 = () => (
  <div className="dark h-full">
    <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
      <div className="absolute top-0 right-0 mr-6 -mt-4">
        <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
          Most Popular
        </div>
      </div>
      <div className="mb-5">
        <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
          Perform
        </div>
        <div className="inline-flex items-baseline mb-2">
          <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
            $
          </span>
          <span
            className="text-slate-900 dark:text-slate-200 font-bold text-4xl"
            x-text="isAnnual ? '49' : '55'"
          >
            49
          </span>
          <span className="text-slate-500 font-medium">/mo</span>
        </div>
        <div className="text-sm text-slate-500 mb-5">
          There are many variations available, but the majority have suffered.
        </div>
        <a
          className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
          href="#0"
        >
          Purchase Plan
        </a>
      </div>
      <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
        Includes:
      </div>
      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Unlimited placeholder texts</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Consectetur adipiscing elit</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Excepteur sint occaecat cupidatat</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Officia deserunt mollit anim</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Predefined chunks as necessary</span>
        </li>
      </ul>
    </div>
  </div>
);

export const PricingTab3 = () => (
  <div className="h-full">
    <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
      <div className="mb-5">
        <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
          Enterprise
        </div>
        <div className="inline-flex items-baseline mb-2">
          <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
            $
          </span>
          <span
            className="text-slate-900 dark:text-slate-200 font-bold text-4xl"
            x-text="isAnnual ? '79' : '85'"
          >
            79
          </span>
          <span className="text-slate-500 font-medium">/mo</span>
        </div>
        <div className="text-sm text-slate-500 mb-5">
          There are many variations available, but the majority have suffered.
        </div>
        <a
          className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
          href="#0"
        >
          Purchase Plan
        </a>
      </div>
      <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
        Includes:
      </div>
      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Unlimited placeholder texts</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Consectetur adipiscing elit</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Excepteur sint occaecat cupidatat</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Officia deserunt mollit anim</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Predefined chunks as necessary</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Free from repetition</span>
        </li>
      </ul>
    </div>
  </div>
);

export const PricingTabs = () => (
  <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div x-data="{ isAnnual: true }">
        {/* <!-- Pricing toggle --> */}
        <PricingToggle />
        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          {/* <!-- Pricing tab 1 --> */}
          <PricingTab1 />
          {/* <!-- Pricing tab 2 --> */}
          <PricingTab2 />
          {/* <!-- Pricing tab 3 --> */}
          <PricingTab3 />
        </div>
      </div>
    </div>
  </main>
);
