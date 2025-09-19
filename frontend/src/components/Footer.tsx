export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Full-stack developer passionate about creating amazing web experiences.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#about" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#library" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                  Library
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-1 text-sm">
              <li className="text-gray-500 dark:text-gray-400">Web Development</li>
              <li className="text-gray-500 dark:text-gray-400">Mobile Apps</li>
              <li className="text-gray-500 dark:text-gray-400">UI/UX Design</li>
              <li className="text-gray-500 dark:text-gray-400">Consulting</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}