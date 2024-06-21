// src/pages/HomePage.jsx or wherever your Home component is located
import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation
import LazyVideo from "../Knowledge Hub/Videos/LazyVideo";
import LazyStory from "../Knowledge Hub/Kids Corner/LazyStory";
import LazyArticle from "../Knowledge Hub/Makala/LazyArticle";
import About from "../About/About";
import Activities from "../Activities/Activities";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import video from "../Knowledge Hub/Videos/Salma Batool.mp4";
const Home = () => {
  const story = {
    title: "مباہلہ",
    content: `

(زہرا کالج میں سب کے درمیان مٹھائی بانٹتے ہوئے اور خوشی سے)

زہرا: سب مٹھائی کھائیں........ اج بہت ہی خوشی کا دن ہے۔۔۔۔۔ اؤ اؤ ثانیہ تم بھی لو ۔۔۔۔۔۔اج تمام ادیان پر دین اسلام کے غلبے کا دن ہے۔۔۔۔۔۔۔۔۔  اج اہل بیت کی سب سے بڑی فضیلت کے دن ہے۔۔۔۔۔۔۔۔۔ اج صرف سچوں کا دن ہے۔۔۔۔۔۔۔
زینب، لینا کو بھی بلاؤ اس سے بھی دو مٹھائی۔۔۔۔۔

زینب: زہرا کیا کر رہی ہو ......وہ تو کرسچن ہے
زہرا: تو کیا ہوا وہ ہمارے نبی حضرت عیسی کو ماننے والی ہے اور یہ  بات ہماری اور ان کے درمیان بالکل same ہے.
زینب ; لینا hello 
لینا : Hy ,how are you
زینب: I am good.please take some sweet
لینا: لیکن یہ کس لیے ہے؟ زہرا کی منگنی ہو تو نہیں ہو گئی( مذاق کرتے ہوئے)
زہرا :نہیں لینا...... اج ہمارے دین کا بہت بڑا event ہے. تو سوچا مٹھائی بانٹ لوں....
لینا: کیسا event؟
زہرا: 1400 سال پہلے ہمارے نبی نے جب دین اسلام کو کامیابی سے پھیلا دیا اور زیادہ تر مشرکین مکہ مسلمان ہو گئے تو ہمارے نبی نے ایک خط اس زمانے کے عیسائی pop کو بھیجا کہ وہ بھی مسلمان ہو جائیں یا جزیادیں.... جب وہ مدینہ ائے اور رسول خدا صلی اللہ علیہ والہ وسلم سے ملاقات کی اور مناظرہ کیا تو اس مناظرے میں جب وہ ہار گئے تو اللہ نے اپنے نبی کو وحی بھیجی کہ ان سے مباہلہ کرو.....
لینا: مباہلہ!!!!!!! مباہلہ کیا کوئی جنگ تھی؟
زینب: مباہلے کا مطلب ہے کہ سب دلیلیں دینے کے بعد بھی اگر فیصلہ نہ ہو سکے کہ کون سچا ہے اور کون جھوٹا، تو پھر اللہ سے دونوں گروپ ایک دوسرے کے لیے عذاب مانگتے ہیں اور جس پر عذاب نازل ہو وہ جھوٹا ہوتا ہے۔
جینیفر:  لینا چلو یہاں سے۔۔۔۔۔ یہ تم کن لوگوں کی باتیں سن رہی ہو۔۔۔۔۔ عیسائیت ھی اصلی دین ہے اور جب حضرت عیسی اللہ کے بیٹے ہیں تو ان کے نبی کی کیا حیثیت رہ جاتی ہے۔۔۔۔۔۔
زہرا :جینی، عیسی اللہ کے بیٹے کیسے ہو سکتے ہیں وہ تو صرف اللہ کے بندے ہیں.
جینیفر: کیونکہ وه بغیر باپ کے پیدا ہوئے ہیں اور یہ کوالٹی تمہارے نبی کے پاس نہیں ہے......
زہرا :اگر بغیر باپ کے پیدا ہونا فضیلت ہے تو پھر حضرت ادم اور حضرت حوا تو باپ کیا بغیر ماں کے پیدا ہوئے ہیں لیکن ان کو تو کوئی خدا کا بیٹا نہیں کہتا.......
لینا :نہیں نہیں جینی نے غلط کہا وہ خدا کے بیٹے نہیں ہیں بلکہ وہ تو خود خدا کا ایک حصہ ہے .......ہماری انجیل میں بھی یہی ہے کہ وہ خدا ہیں...... انہوں نے ماں کی گود میں کلام کیا....... وہ مردوں کو زندہ کرتے تھے......
زینب: اگر ماں کی گود میں کلام کرنا خدا ہونے کی دلیل ہے تو حضرت یوسف کی گواہی دینے والا بچہ بھی خدا ہوا .......اور اگر مردوں کو زندہ کرنا خدا ہونے کی دلیل ہے تو پھر حضرت موسی اور حضرت ابراہیم بھی خدا ہیں کیونکہ حضرت موسی نے مقتول کو اور حضرت ابراہیم نے چار پرندوں کو زندہ کیا......!!!!
زہرا: یہ کیسا خدا ہے جو اپنی حفاظت نہ کر سکا اور لوگوں نے ان کو صلیب پر چڑھا دیا ؟.....اور پھر ان کو دفن بھی کیا. یہ کیسا خدا ہے جو نمازیں بھی پڑھتا ہے روزے بھی رکھتا ہے جبکہ خدا عبادت نہیں کرتا بلکہ اس کی عبادت کی جاتی ہے۔۔۔۔۔؟
یہ کیسا خدا ہے جو کھاتا ہے پیتا ہے سوتا ہے اور جاگتا ہے؟
یہ تو ہم بالکل انسانوں جیسا ہے جب کہ ہم جانتے ہیں کہ خدا انسانوں جیسا نہیں ہو سکتا۔
جینیفر :میرا توسرا چکرا رہا ہے تم لوگوں کی باتیں سن کر.....
لینا :میں نے تو کبھی ایسا سوچا ہی نہیں تھا...... تم صحیح کہہ رہی ہو زہرا..... اچھا پھر بتاؤ عذاب کس پر نازل ہوا؟
زہرا :کسی پر بھی نہیں.......
جینیفر:  یہ کیا بات ہوئی کہ کسی پر بھی نہیں،،،،
زہرا :وہ اس لیے کہ جب رسول خدا اپنی بیٹی نواسے اور بھائی کے ساتھ میدان میں ائے تو عیسائیوں کا سب سے بڑا pop ان کے نورانی چہرے دیکھ کر سمجھ گیا کہ یہ لوگ عام انسان نہیں ہیں یہ کوئی نورانی ہستیاں ہیں... اس نے اسمان پر عذاب کی اثار بھی دیکھ لیے تھے.... اس نے کہا اگر یہ لوگ بددعا کر دیں تو ہم عیسائیوں میں کوئی بھی باقی نہیں رہے گا ...عیسائیت ختم ہو جائے گی. ہمیں محمد سے بات کر کے ان کو جزیہ دینا ہوگا. تب ان لوگوں نے اپنی شکست تسلیم کی اور یوں خدا نے اہل بیت کے ذریعے اسلام کو عیسائیت پر بغیر جنگ کے فتح نصیب کی.
زینب: اور لینا ,جینی ,تم لوگ جانتے ہو کہ ہمارے حضرت عیسی جب واپس ائیں گے تو بیت المقدس میں ہمارے اخری امام, امام مہدی کے پیچھے نماز پڑھیں گے اور جب عیسائی یہ منظر دیکھیں گے تو وہ بھی سب مسلمان ہو جائیں گے.
لینا: میں نے تمہاری باتیں سنی ہیں اور میرے دل کو سکون بھی ملا ہے. میں خود اب اس بارے میں ریسرچ کروں گی تاکہ زیادہ اسلام کو سمجھ سکوں.
زہرا :میں تمہیں ایک link بھیجوں گی اس میں ان لوگوں کے انٹرویوز ہیں جو لوگ عیسائی تھے اور مسلمان ہوئے .وہ تمہاری ریسرچ میں بہت help کرے گا.
لینا: Thank you very much zahra
It was a very good day for me.
Your welcome dear good by:.زهرا
    `,
  };

  const article = {
    title: "Title of the Article",
    content:
      "Content of the Article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="container-fluid hero-header" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="hero-header-inner animated zoomIn">
                <p className="fs-4 text-dark">WELCOME TO</p>
                <h1 className="display-1 mb-5 text-dark">
                  Al Ramadan Islamic Institute
                </h1>
                <a href="#about" className="btn btn-primary py-3 px-5">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="content-section">
        {/* Kid's Story Section */}
        <div className="content-section story-section">
          <div className="container">
            <h2 className="section-title">Kid's Story</h2>
            <div className="content-grid">
              <div className="content-item">
                <LazyStory
                  title={story.title}
                  content={story.content}
                  className="story-item"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Video Section */}
        <div className="content-section video-section">
          <div className="container">
            <h2 className="section-title">Watch Our Latest Video</h2>
            <div className="content-grid">
              <div className="content-item">
                <LazyVideo
                  src={video}
                  type="video/mp4"
                  className="video-item"
                />
                <div className="button-wrapper">
                  <Link to="/videos" className="btn btn-primary">
                    Watch More Videos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Section */}
        <div className="content-section article-section">
          <div className="container">
            <h2 className="section-title">Latest Article</h2>
            <div className="content-grid">
              <div className="content-item">
                <LazyArticle
                  title={article.title}
                  content={article.content}
                  className="article-item"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Activities />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
