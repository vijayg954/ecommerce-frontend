import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterbox from "../components/NewsLetterbox";

const About = () => {
  return (
    <div className="mx-10">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"}></Title>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        ></img>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">

        <p>
          dsklfjkl nsdfjklsdf ,sdnhfklsd sdfnhklsf nhskldfnm,nflh, s,nhfklklh,sf
          ,mhjjkoies tjoiwej vdkoiert ḍvklerhjtgl vkitghv sghj
          dsklfjkl nsdfjklsdf ,sdnhfklsd sdfnhklsf nhskldfnm,nflh, s,nhfklklh,sf
          ,mhjjkoies tjoiwej vdkoiert ḍvklerhjtgl vkitghv sghj
        </p>
        <p>
          dsklfjkl nsdfjkls askldjkla asjfdlj.m, asfdkld kliashfd. m,fhklfnafhaf
          ādf ,sdnhfklsd sdfnhklsf nhskldfnm,nflh, s,nhfklklh,sf ,mhjjkoies
          tjoiwej vdkoiert ḍvklerhjtgl vkitghv sghj
        </p>
        <b className="text-gray-800">Our Mission</b>
        <p > s askldjkla asjfdlj.m, asfdkld kliashfd. m,fhklfnafhaf
          ādf ,sdnhfklsd sdfnhklsf nhskldfnm,nflh, s,nhfklklh,sf ,mhjjkoies
          tjoiwej vdkoiert ḍvklerhjtgl v</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"why"} text2={"Chose Us"}></Title>
      </div>
      <div className="flex flex-col mb-20 md:flex-row text-sm">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Quality Assurance</b>
          <p className="text-gray-600">s askldjkla asjfdlj.m, asfdkld kliashfd. m,fhklfnafhaf
          ādf ,sdnhfklsd sdfnhklsf nhskldfnm,nflh, s,nhfklklh,sf ,mhjjkoies
          tjoiwej vdkoiert ḍvklerhjtgl v</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Convinience</b>
          <p className="text-gray-600">s askldjkla asjfdlj.m, asfdkld kliashfd. m,fhklfnafhaf
          ādf ,sdnhfklsd sdfnhklsf nhskldfnm,nflh, s,nhfklklh,sf ,mhjjkoies
          tjoiwej vdkoiert ḍvklerhjtgl v</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Exceptional Customer Service</b>
          <p className="text-gray-600">s askldjkla asjfdlj.m, asfdkld kliashfd. m,fhklfnafhaf
          ādf ,sdnhfklsd sdfnhklsf nhskldfnm,nflh, s,nhfklklh,sf ,mhjjkoies
          tjoiwej vdkoiert ḍvklerhjtgl v</p>
        </div>
      </div>
<NewsLetterbox></NewsLetterbox>
    </div>
  );
};

export default About;
