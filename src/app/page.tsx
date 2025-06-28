import Profile from '@/components/Profile';
import Introduce from '@/components/Introduce';
import TechSkill from '@/components/TechSkill';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Profile />
            <Introduce />
            <TechSkill />
          </div>
        </div>
      </div>
    </main>
  );
}