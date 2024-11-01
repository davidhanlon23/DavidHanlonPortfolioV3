"use client"
import { useGlobal } from '@/components/providers/global-provider/global-provider';
import { DefaultView, HackerView } from './views';

const Home = () => {
    const { view } = useGlobal();

    const renderContent = () => {
        switch(view) {
            case 'default':
                return <DefaultView />;
            case 'hacker':
                return <HackerView />;
        }
    };
    return(
            <div className="flex flex-col min-h-screen">
                {renderContent()}
          </div>
    );
};
export default Home;