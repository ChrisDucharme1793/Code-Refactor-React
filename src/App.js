import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <title>Horiseon</title>
      <header className="App-header">
      <header class="header">
        <h1>Hori<span class="seo">seo</span>n</h1>
        <nav>
            <ul>        
                <li><a href="#search-engine-optimization">Search Engine Optimization</a></li>
                <li><a href="#online-reputation-management">Online Reputation Management</a></li>
                <li><a href="#social-media-marketing">Social Media Marketing</a></li>
            </ul>
        </nav>
    </header>
      </header>
      <body>
  
    <section class="hero"></section>
    <section class="content">
        <section id= "search-engine-optimization" class="search-engine-optimization">
            <img src="./images/search-engine-optimization.jpg" alt="search-engine-optimization" class="float-left" />
            <h2>Search Engine Optimization</h2>
            <p>The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.</p>
        </section>
        <section id="online-reputation-management" class="online-reputation-management">
            <img src="./images/online-reputation-management.jpg" alt="online-reputation-management" class="float-right" />
            <h2>Online Reputation Management</h2>
            <p>The web is full of opinions, and some of these can be negative. Social media allows anyone with an internet connection to say whatever they want about your business. Online Reputation Management gives you the control over what potential customers see when they search for your business.</p>
        </section>
        <section id="social-media-marketing" class="social-media-marketing">
            <img src="./images/social-media-marketing.jpg" alt="social-media-marketing" class="float-left" />
            <h2>Social Media Marketing</h2>
            <p>Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation. </p>
        </section>
    </section>

  
    <sidebar class="benefits">

        <section class="benefit-lead">
            <h3>Lead Generation</h3>
            <img src="./images/lead-generation.png" alt="lead-generation" />
            <p>Inbound strategies for lead generation require less work for your business, bringing customers directly to your website.</p>
        </section>

        <section class="benefit-brand">
            <h3>Brand Awareness</h3>
            <img src="./images/brand-awareness.png" alt="brand-awareness" />
            <p>Users find your business through paid and organic searches, increasing the search ranking and visibility for your business.</p>
        </section>

        <section class="benefit-cost">
            <h3>Cost Management</h3>
            <img src="./images/cost-management.png" alt="cost-management"></img>
            <p>As the search ranking for your business increases, your advertising costs decrease, and you no longer need to advertise your page.</p>
        </section>
    </sidebar>
    <footer class="footer">
        <h2>Made with ❤️️ by Horiseon</h2>
        <p>&copy; 2019 Horiseon Social Solution Services, Inc.</p>
    </footer>
</body>
    </div>
  );
}

export default App;
