import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/ui';

const Testimonials = () => {
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Traders Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Game-Changing Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <p>"Trendz has revolutionized my trading. The insights I've gained have significantly improved my win rate!"</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">- Alex Chen, Day Trader</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Essential for Serious Traders</CardTitle>
              </CardHeader>
              <CardContent>
                <p>"I can't imagine trading without Trendz now. It's helped me identify and eliminate bad habits in my trading."</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">- Sarah Johnson, Swing Trader</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    );

};
export default Testimonials;