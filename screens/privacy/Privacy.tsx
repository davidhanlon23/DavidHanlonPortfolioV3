import { Card, CardHeader, CardTitle, CardContent } from '@/ui';

const Privacy = () => {
  const todaysDate = new Date().toLocaleDateString();
  return (
    <main className="flex flex-col flex-1 py-6 px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">{`Last updated: ${todaysDate}`}</p>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Trendz ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our trading journal service.</p>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-gray-600 dark:text-gray-300">Account information (e.g., name, email address, password)</li>
            <li className="text-gray-600 dark:text-gray-300">Trading data (e.g., trade details, portfolio information)</li>
            <li className="text-gray-600 dark:text-gray-300">User-generated content (e.g., notes, tags, custom metrics)</li>
            <li className="text-gray-600 dark:text-gray-300">Communication data (e.g., customer support inquiries)</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-gray-600 dark:text-gray-300">Provide, maintain, and improve our services</li>
            <li className="text-gray-600 dark:text-gray-300">Process and complete transactions</li>
            <li className="text-gray-600 dark:text-gray-300">Send you technical notices, updates, security alerts, and support messages</li>
            <li className="text-gray-600 dark:text-gray-300">Respond to your comments, questions, and requests</li>
            <li className="text-gray-600 dark:text-gray-300">Develop new products and services</li>
            <li className="text-gray-600 dark:text-gray-300">Generate anonymized, aggregate data for research and analysis</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.</p>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">5. Data Retention</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We retain your information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-gray-600 dark:text-gray-300">The right to access your personal information</li>
            <li className="text-gray-600 dark:text-gray-300">The right to rectify inaccurate personal information</li>
            <li className="text-gray-600 dark:text-gray-300">The right to request deletion of your personal information</li>
            <li className="text-gray-600 dark:text-gray-300">The right to restrict or object to our processing of your personal information</li>
            <li className="text-gray-600 dark:text-gray-300">The right to data portability</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">7. Third-Party Services</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you access.</p>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Our service is not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.</p>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">If you have any questions about this Privacy Policy, please contact us at privacy@trendz.com.</p>
        </CardContent>
      </Card>
    </main>
  );
};

export default Privacy;
