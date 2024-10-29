import { Card, CardHeader, CardTitle, CardContent } from '@/ui';

const TermsOfService = () => {
    const todaysDate = new Date().toLocaleDateString();
    return (
        <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">{`Last updated: ${todaysDate}`}</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">By accessing or using the Trendz trading journal service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Trendz provides a digital platform for tracking, analyzing, and gaining insights from your trading activities. Our service includes trade logging, performance analytics, and personalized insights.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">You must create an account to use our Service. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">4. User Data</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">You retain all rights to your data. By using our Service, you grant Trendz a license to use, modify, and display your data solely for the purpose of providing and improving our Service.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">5. Prohibited Uses</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">You may not use our Service for any illegal purpose or to violate any laws in your jurisdiction. You may not use the Service to manipulate or misrepresent your trading activities.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Our Service is provided "as is" without any warranties, expressed or implied. Trendz does not warrant that the Service will be error-free or uninterrupted.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Trendz shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the Service.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">8. Financial Advice Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Trendz is not a financial advisor. Our Service is for informational purposes only and should not be considered financial advice. Always consult with a qualified financial advisor before making investment decisions.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">9. Modifications to Service</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Trendz reserves the right to modify or discontinue the Service with or without notice at any time.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">We reserve the right to update these Terms at any time. We will notify you of any changes by posting the new Terms on this page.</p>
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">If you have any questions about these Terms, please contact us at support@trendz.com.</p>
          </CardContent>
        </Card>
        </main>
        
    );
}
export default TermsOfService;