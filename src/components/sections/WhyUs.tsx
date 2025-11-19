import { Container } from '@/components/layout/Container';
import Divider from '@/components/ui/atoms/Divider';
import { Typography } from '@/components/ui/atoms/Typography';

export default function WhyUs() {
  return (
    <Container>
      <Typography variant='titleL' className='mb-4 text-center'>
        Why with us?
      </Typography>
      <Typography
        variant='bodyMRegular'
        className='text-center italic text-primary'
      >
        Our unparalleled knowledge and deep understanding of African culture”
      </Typography>
      <Divider />

      <Typography variant='titleM' className='mb-4 '>
        Reasons to Partner with Pigassos
      </Typography>
      <Typography variant='bodyMRegular' className='mb-10 '>
        Our 30 years business experience in Africa
      </Typography>
      <ul className='space-y-4'>
        <li className='flex items-start gap-3'>
          <span className='text-primary text-xl'>🌟</span>
          <Typography variant='bodyMRegular'>
            Commitment to <strong>transparency and integrity</strong>
          </Typography>
        </li>
        <li className='flex items-start gap-3'>
          <span className='text-primary text-xl'>🌟</span>
          <Typography variant='bodyMRegular'>
            Our continuous growth and{' '}
            <strong>successful sales track record</strong>
          </Typography>
        </li>
        <li className='flex items-start gap-3'>
          <span className='text-primary text-xl'>🌟</span>
          <Typography variant='bodyMRegular'>
            Our <strong>assets and network</strong> on the ground
          </Typography>
        </li>
        <li className='flex items-start gap-3'>
          <span className='text-primary text-xl'>🌟</span>
          <Typography variant='bodyMRegular'>
            Our <strong>excellent cooperation</strong> with our{' '}
            <strong>suppliers and partners</strong>
          </Typography>
        </li>
        <li className='flex items-start gap-3'>
          <span className='text-primary text-xl'>🌟</span>
          <Typography variant='bodyMRegular'>
            Our{' '}
            <strong>
              ability to turn low performing brands into successful products
            </strong>
          </Typography>
        </li>
      </ul>
      <Typography variant='titleM' className='mt-20 '>
        Our Brands and Top sellers
      </Typography>
      <Typography variant='bodyMRegular' className='my-4 '>
        Pigassos offers a diverse brand portfolio of premium and average-price
        cigarettes, including slim, filtered, menthol and regular. The tobacco
        varieties we use are Virginia and American blends. Our brands are
        produced via our cooperating factories worldwide and we ship orders from
        Europe, Asia and South America. All brands are customized to
        client/market requests in order to comply fully with the specific
        demands and regulations of each country.
      </Typography>
    </Container>
  );
}
