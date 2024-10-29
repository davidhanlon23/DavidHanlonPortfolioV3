import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@/ui';
import { Check } from 'lucide-react';
const Pricing = () => {
    return(
        <>
            <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Choose Your Trading Edge</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Starter</CardTitle>
                        <CardDescription>For new traders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-4xl font-bold">$29/mo</p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Basic trade logging</li>
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Performance metrics</li>
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Up to 100 trades/month</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Trading</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Pro</CardTitle>
                        <CardDescription>For serious traders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-4xl font-bold">$99/mo</p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Advanced analytics</li>
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Personalized insights</li>
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Unlimited trades</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Upgrade Now</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Enterprise</CardTitle>
                        <CardDescription>For trading firms</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-4xl font-bold">Custom</p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Custom integrations</li>
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Team collaboration tools</li>
                          <li className="flex items-center"><Check className="mr-2 h-4 w-4" /> Dedicated support</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Contact Sales</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </section>
        </>
    );

};
export default Pricing;