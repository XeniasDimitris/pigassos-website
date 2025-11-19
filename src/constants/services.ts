import { PATHS } from '@/constants/paths';
import { Plane } from 'lucide-react';

const pathToTranslation = 'services';

export const SERVICES: Record<
  string,
  {
    title: string;
    description: string;
    imageLink: string;
    info: [];
    id: string;
    link: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
> = {
  TestService: {
    link: PATHS.testService,
    icon: Plane,
    id: 'TestService',
    title: `${pathToTranslation}.TestService.title`,
    description: `${pathToTranslation}.TestService.shortDescription`,
    info: [],
    imageLink: '/airport.png  ',
  },
};

export const SERVICE_LINK_TO_ID: Record<string, string> = {
  [PATHS.testService]: 'TestService',
};
