export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-slate-100">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white">
                🍔
              </div>
              <p className="text-lg font-bold">Order<span className="text-brand-500">.</span></p>
            </div>
            <p className="text-sm text-slate-300">
              Simple food ordering UI for your task. Replace with your real content later.
            </p>
            <div className="mt-4 flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700">📱</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700">🍏</div>
            </div>
          </div>
          <div>
            <p className="mb-3 font-bold">Company</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Team</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-bold">Contact</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-white cursor-pointer">Help & Support</li>
              <li className="hover:text-white cursor-pointer">Partner with us</li>
              <li className="hover:text-white cursor-pointer">Ride with us</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-bold">Legal</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Refund & Cancellation</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">
          <div className="text-sm text-slate-500">
            © 2026 SNACKBOX. All rights reserved.
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-sm hover:bg-slate-700">f</div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-sm hover:bg-slate-700">t</div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-sm hover:bg-slate-700">in</div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-sm hover:bg-slate-700">ig</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
