import React from 'react';
import { SKILLS, CATEGORY_COLORS, CATEGORY_NAMES, type Skill } from '@/constants/skills';

export default function TechSkill() {
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Tech Skills</h2>
      <div className="space-y-6">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              {CATEGORY_NAMES[category as keyof typeof CATEGORY_NAMES]}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-full border ${CATEGORY_COLORS[skill.category]} transition-colors duration-200`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
