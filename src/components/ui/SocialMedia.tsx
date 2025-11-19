import React from 'react';
import { cn } from '@/lib/utils';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  GithubIcon,
  GlobeIcon,
} from 'lucide-react';

export type SocialType =
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'youtube'
  | 'github'
  | 'website';

export interface SocialMediaItem {
  type: SocialType;
  url: string;
  label?: string;
}

const iconMap: Record<SocialType, React.ElementType> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  github: GithubIcon,
  website: GlobeIcon,
};

interface SocialMediaProps {
  items: SocialMediaItem[];
  className?: string;
  iconSize?: number;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({
  items,
  className,
  iconSize = 24,
}) => {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <div className={cn('flex flex-row items-center gap-4', className)}>
      {items.map((item, idx) => {
        const Icon = iconMap[item.type];
        return (
          <a
            key={item.url + idx}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={item.label || item.type}
            className='transition-colors hover:bg-accent-foreground/20 p-2 rounded-[50%]'
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
};
