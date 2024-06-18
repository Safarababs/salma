import React from "react";

function ArticlesPage() {
  // Dummy data for articles
  const articles = [
    {
      title: "شیعہ کون ہیں؟",
      content: `اس مضمون میں شیعہ کے بنیادی اصولوں، مذہبی عقائد، اور تاریخی پس منظر پر غور کیا جائے گا۔

مضامین:
تعریف و تاریخی پس منظر: شیعہ کی تعریف اور اس کی بنیادیں، اسلامی تاریخ میں اس کا ابتدائی مظاہرہ۔

عقائد و اصول: شیعہ عقائد کے مخصوص پہلو، مثلاً عقیدہ امامت اور عدالت۔

شیعہ فقہی تشریح: شیعہ فقہی مزہبی احکام اور ان کی مواقف، مثلاً نماز، روزہ، زکوٰة، خم وغیرہ۔

شیعہ کا موقعہ اور عصر حاضر: شیعہ فکری، معاشرتی اور سیاسی مقامات کے بارے میں بحث۔`,
    },
    {
      title: "تقلید کیوں ضروری ہے؟",
      content: `مقالے میں تقلید کے مفہوم، اہمیت، اور اس کے مختلف فقہی مذاہب میں اس کی تشریح کی جائے گی۔

مضامین:
تقلید کی تعریف اور اصول: تقلید کے مفہوم، اس کے اصول، اور فقہی احکام پر اس کا اثر۔

تقلید کے اہمیت: تقلید کے فقہی، معاشرتی، اور دینی میں اہمیت، مثلاً مسلمانوں کے لیے دینی مسائل کا حل، اجتماعی امور کی تنظیم، اور اخلاقیات۔

مختلف فقہی مذاہب میں تقلید: ہندس، مالکی، شافعی، حنفی فقہ کے بین الاقوامی اماموں کی تقلید کے مفہوم، مفاسد، وممکنات۔`,
    },
    // Add more articles as needed
  ];

  const copyContent = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => alert("Content copied to clipboard"))
      .catch((error) => console.error("Could not copy content: ", error));
  };

  return (
    <div className="articles-page">
      <header>
        <h1>Welcome to My Articles</h1>
      </header>
      <main>
        {articles.map((article, index) => (
          <article key={index} className="article">
            <h2>{article.title}</h2>
            <div className="article-content">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <button onClick={() => copyContent(article.content)}>
              Copy Text
            </button>
          </article>
        ))}
      </main>
    </div>
  );
}

export default ArticlesPage;
