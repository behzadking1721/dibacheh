import { Code, Database, Globe, Smartphone } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development", 
      description: "Node.js, Express, PostgreSQL, MongoDB"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Technologies",
      description: "REST APIs, GraphQL, WebSockets"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps"
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I'm a passionate full-stack developer with over 5 years of experience building web applications.
              I love turning complex problems into simple, beautiful solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Started as a curious student learning HTML and CSS, now I build full-scale applications
                that serve thousands of users. I believe in continuous learning and staying up-to-date
                with the latest technologies.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">What I Do</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I specialize in creating modern, responsive web applications with a focus on user experience
                and performance. From concept to deployment, I handle every aspect of the development process.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-gray-800/50">
                <div className="text-blue-500">{skill.icon}</div>
                <h4 className="text-lg font-semibold text-center">{skill.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}