import { Card, CardHeader, CardTitle, CardContent } from '@/ui';
import { BookOpen, BarChart, Zap } from 'lucide-react';

const Features = () => {
    return(
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                      <CardHeader>
                        <BookOpen className="h-8 w-8 mb-2" />
                        <CardTitle>Comprehensive Trade Logging</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Easily log and track all your trades in one place, including entry and exit points, position sizes, and notes.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <BarChart className="h-8 w-8 mb-2" />
                        <CardTitle>Advanced Analytics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Gain deep insights into your trading performance with detailed charts, metrics, and trend analysis.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <Zap className="h-8 w-8 mb-2" />
                        <CardTitle>Personalized Insights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Receive AI-powered recommendations to improve your trading strategy based on your performance data.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
    );
};
export default Features;