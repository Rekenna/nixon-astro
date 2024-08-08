"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Logo from "./Logo";

export type MastheadProps = {
  menu: {
    internalName: string;
    items: {
      title: string;
      slug: string;
      href: string;
      isExternal: boolean;
      isActive: boolean;
    }[];
  };
};

export default function Masthead({ menu }: MastheadProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent sticky inset-0 z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
      >
        <Logo />
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-8 w-8" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {menu.items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={clsx("text-lg leading-6 text-white", {
                "text-slate-200 underline": item.isActive,
              })}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menu.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={clsx(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white",
                      {
                        "text-slate-200 underline": item.isActive,
                      }
                    )}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
