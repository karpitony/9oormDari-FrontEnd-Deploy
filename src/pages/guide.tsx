import GuideCard from '../components/GuideCard';
import GuideFour from '../assets/guide/guide-4.png';
import GuideOne from '../assets/guide/guide-1.png';
import GuideThree from '../assets/guide/guide-3.png';
import GuideTwo from '../assets/guide/guide-2.png';
import cn from '../lib/cn';

export default function Guide() {
    return (
        <div
            className={cn(
                'min-h-[500px] flex flex-col justify-center items-center'
            )}
        >
            <div className="w-full flex justify-start lg:justify-center">
                <h1 className="text-4xl font-bold p-5 pt-[50px] lg:pt-[100px] text-left lg:text-center">
                    <span className="block lg:hidden">
                        구름다리 어떻게 <br /> 이용하나요?
                    </span>
                    <span className="hidden lg:block">
                        구름다리 어떻게 이용하나요?
                    </span>
                </h1>
            </div>
            <div
                className={cn(
                    'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center pt-[0px] lg:pt-[50px]'
                )}
            >
                <GuideCard
                    stepNumber={1}
                    imageUrl={GuideOne}
                    footerText={'친구들과 <br />함께'}
                />
                <GuideCard
                    stepNumber={2}
                    imageUrl={GuideTwo}
                    footerText={'루틴 달성 후 <br />인증'}
                />
                <GuideCard
                    stepNumber={3}
                    imageUrl={GuideThree}
                    footerText={'구름다리로 <br />루틴 성취 확인'}
                />
                <GuideCard
                    stepNumber={4}
                    imageUrl={GuideFour}
                    footerText={'루틴 성취율 <br />한눈에 확인'}
                />
            </div>
        </div>
    );
}
