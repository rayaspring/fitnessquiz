import { Globe } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Contacts'] },
    { title: 'Support', links: ['Need Help?', 'Money-back Policy', 'Terms of Service'] },
    { 
      title: 'Legal', 
      links: [
        'Privacy Policy',
        'Subscription Terms',
        'e-Privacy Settings',
        'Your Privacy Choices'
      ] 
    },
    { 
      title: 'Programs', 
      links: [
        'Products',
        'Store',
        'For Business',
        'Affiliate Program'
      ] 
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-gray-600 hover:text-purple-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-600">
            <Globe size={20} />
            <span>UA en</span>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-gray-600">
            We will process your personal data in accordance with our Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  );
}