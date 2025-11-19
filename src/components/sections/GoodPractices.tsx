import { Container } from '@/components/layout/Container';
import TextWithImage from '@/components/layout/TextWithImage';
import { Typography } from '@/components/ui/atoms/Typography';

export default function GoodPractices() {
  return (
    <Container>
      <TextWithImage
        type='ltr'
        imageSrc='/handshake.jpg'
        imageAlt={'Good Practices'}
      >
        <Typography variant='titleL' className='mb-4'>
          Good Practices
        </Typography>
        <Typography variant='bodyMRegular'>
          In Pigassos we pride ourselves in Excellence, Integrity, Ethics,
          Professionalism, Respect to Environment and we are devoted to improve
          our good practices.
        </Typography>
        <Typography variant='bodyMRegular' className='mt-4'>
          Along with a Statement on Transparency and Integrity, Code of Conduct
          and the relevant transparency procedures, we have also put in place
          transparent financial techniques, serving altogether as a check and
          balance procedure while conducting business and interacting with our
          business partners.
        </Typography>
      </TextWithImage>
    </Container>
  );
}
