import React from 'react';

const LinkItem = ({ url, text }) => {
  return (
    <li className="mb-2">
      <a
        href={url}
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </li>
  );
};

const Links = () => {
  const edgeComputingLinks = [
    {
      url: 'https://www.ibm.com/cloud/what-is-edge-computing',
      text: 'IBM Edge Computing',
    },
    {
      url: 'https://www.cloudflare.com/learning/serverless/glossary/what-is-edge-computing/',
      text: 'Cloudflare Edge Computing',
    },
    {
      url: 'https://www.networkworld.com/article/3224893/what-is-edge-computing-and-how-it-s-changing-the-network.html',
      text: 'Network World: What is Edge Computing?',
    },
    {
      url: 'https://www.accenture.com/us-en/insights/cloud/edge-computing-index',
      text: 'Accenture Edge Computing',
    },
    {
      url: 'https://innovatorscentral.ca/edge-computing-pros-cons/',
      text: 'Innovators Central: Edge Computing Pros and Cons',
    },
    {
      url: 'https://gocoding.org/advantages-and-disadvantages-of-edge-computing/',
      text: 'Go Coding: Advantages and Disadvantages of Edge Computing',
    },
    {
      url: 'https://www.knowledgenile.com/blogs/edge-cloud-fog-computing-what-is-the-difference-between-them/#FogComputinginIoT',
      text: 'KnowledgeNile: Edge, Cloud, Fog Computing - What is the Difference?',
    },
    {
      url: 'https://worldtechjournal.com/what-is-edge-computing-advantages/',
      text: 'World Tech Journal: What is Edge Computing? Advantages',
    },
    {
      url: 'https://www.telehouse.net/blog/cutting-through-the-mist-with-fog-computing/',
      text: 'Telehouse: Cutting Through the Mist with Fog Computing',
    },
    {
      url: 'https://touchit.sk/spracovanie-dat-v-realnom-case-privitajte-edge-computing/493234',
      text: 'Spracovanie dát v reálnom čase? Privítajte Edge Computing',
    },
    {
      url: 'https://www.master.cz/blog/edge-computing-slibuje-nizsi-latenci/',
      text: 'Cesta k nižší latenci: co je edge computing?',
    },
  ];

  const edgeComputingVideos = [
    {
      url: 'https://youtu.be/3hScMLH7B4o',
      text: 'What is edge computing? - IDG TECHtalk',
    },
    {
      url: 'https://youtu.be/cEOUeItHDdo',
      text: 'What is edge computing?  - IBM Technology',
    },
    {
      url: 'https://youtu.be/EmmNb0zhvxc',
      text: 'What is Edge Computing and its Impact on 5G? - Eye of Tech',
    },
    {
      url: 'https://youtu.be/W_VV2Fx32_Y',
      text: 'Serverless Computing in 100 Seconds - Fireship',
    },
    {
      url: 'hhttps://youtu.be/yOP5-3_WFus',
      text: 'Is "edge" computing really faster? - Fireship',
    },
  ];

  const cloudComputingLinks = [
    {
      url: 'https://www.ibm.com/topics/cloud-computing',
      text: 'IBM Cloud Computing',
    },
    {
      url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-edge-computing/',
      text: 'Microsoft Azure: What is Cloud Computing?',
    },
    {
      url: 'https://eddiejackson.net/web_documents/The_Definitive_Guide_to_Cloud_Computing.pdf',
      text: 'The Definitive Guide to Cloud Computing',
    },
    {
      url: 'https://www.accenture.com/ro-en/cloud/insights/cloud-computing-index',
      text: 'Accenture Cloud Computing',
    },
    {
      url: 'https://www.knowledgehut.com/blog/cloud-computing/importance-of-cloud-computing',
      text: 'KnowledgeHut: Importance of Cloud Computing',
    },
    {
      url: 'https://successive.cloud/disaster-recovery-in-cloud-computing/',
      text: 'Successive Cloud: Disaster Recovery in Cloud Computing',
    },
    {
      url: 'https://eddiejackson.net/web_documents/The_Definitive_Guide_to_Cloud_Computing.pdf',
      text: 'The Definitive Guide to Cloud Computing',
    },
    {
      url: 'https://www.webglobe.sk/poradna/co-je-to-cloud-a-cloud-computing',
      text: 'Čo je to cloud a cloud computing?',
    },
    {
      url: 'https://bezpecnenanete.eset.com/sk/it-bezpecnost/co-je-to-cloud-a-ako-funguje/',
      text: 'Čo je to cloud a ako funguje?',
    },
  ];

  const cloudComputingVideos = [
    {
      url: 'https://youtu.be/M988_fsOSWo',
      text: 'Cloud Computing In 6 Minutes | What Is Cloud Computing? | Cloud Computing Explained - Simplilearn',
    },
    {
      url: 'https://youtu.be/_a6us8kaq0g',
      text: 'Cloud Computing Explained - PowerCert Animated Videos',
    },
    {
      url: 'https://youtu.be/RWgW-CgdIk0',
      text: 'Cloud Computing Tutorial for Beginners | Cloud Computing Explained | Cloud Computing - Simplilearn',
    },
    {
      url: 'https://youtu.be/LNcm86JBVFE',
      text: 'How to learn Cloud and ACTUALLY land a job (2023) - Tech With Lucy',
    },
    {
      url: 'https://youtu.be/1pBuwKwaHp0',
      text: 'Cloud Computing in the Year 2020 - Fireship',
    },
  ];

  return (
    <div className="p-4 mx-[5%]">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Edge Computing</h2>
        <ul className="list-disc pl-6 mt-4">
          {edgeComputingLinks.map((link, index) => (
            <LinkItem key={index} url={link.url} text={link.text} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Videá</h2>
        <ul className="list-disc pl-6 mt-4">
          {edgeComputingVideos.map((link, index) => (
            <LinkItem key={index} url={link.url} text={link.text} />
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Cloud Computing</h2>
        <ul className="list-disc pl-6 mt-4">
          {cloudComputingLinks.map((link, index) => (
            <LinkItem key={index} url={link.url} text={link.text} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Videá</h2>
        <ul className="list-disc pl-6 mt-4">
          {cloudComputingVideos.map((link, index) => (
            <LinkItem key={index} url={link.url} text={link.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;