import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
          <Sparkles className="w-4 h-4 mr-2 text-primary-600" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">MVP Version</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Smart AI Workout Partner App
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Индивидуальный AI-тренер для повышения мотивации и эффективности тренировок.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors flex items-center">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-red-50 dark:bg-red-900/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Многие люди испытывают трудности с мотивацией во время тренировок, что приводит к пропуску занятий и снижению результатов. Особенно это касается новичков и тех, кто возвращается к фитнесу. Отсутствие персонализированного подхода к тренировкам также делает процесс менее эффективным. На фоне растущей конкуренции с существующими фитнес-приложениями, необходимо создать решение, которое поможет пользователям оставаться мотивированными и получать персонализированные рекомендации.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-green-50 dark:bg-green-900/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Smart AI Workout Partner App предлагает пользователям взаимодействие с AI-партнером, который подбадривает, мотивирует и предлагает персонализированные тренировки. Приложение будет адаптироваться к индивидуальным потребностям и предпочтениям пользователя, что позволит повысить мотивацию и улучшить результаты тренировок.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Core Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <div key="0" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">AI Мотивация и Поддержка</h3>
            <p className="text-gray-600 dark:text-gray-300">AI-партнер взаимодействует с пользователем, подбадривает и мотивирует его во время тренировок.</p>
            <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">must-have</span>
          </div>

          <div key="1" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Персонализированные тренировки</h3>
            <p className="text-gray-600 dark:text-gray-300">AI предлагает тренировки на основе предпочтений и уровня подготовки пользователя.</p>
            <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">must-have</span>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-800/50">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Who Is This For?
        </h2>
        <p className="text-center text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our target audience
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          
          <div className="px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow">
            <span className="font-medium">Люди, занимающиеся фитнесом, новички и те, кто возвращается к тренировкам</span>
            <span className="text-gray-500 ml-2">Большой рынок с высоким интересом к фитнес-приложениям</span>
          </div>
          <div className="px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow">
            <span className="font-medium">Фитнес-энтузиасты, ищущие персонализированные решения</span>
            <span className="text-gray-500 ml-2">Средний рынок с потенциальным интересом</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Join early adopters and be part of the journey.
        </p>
        <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-lg">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 Smart AI Workout Partner App. Built with TrendHunter AI.</p>
        </div>
      </footer>
    </main>
  );
}
