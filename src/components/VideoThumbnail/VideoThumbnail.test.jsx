import ThumbnailVideo from './index';
import { fireEvent, render, screen } from '@testing-library/react';

it('should render VideoThumbnail', () => {
    render(<ThumbnailVideo thumbnail={'/assets/image.jpg'} videoPreview={'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=0'} />);
});

it('should render an image from image props', () => {
    render(<ThumbnailVideo thumbnail={'/assets/image.jpg'} videoPreview={'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=0'} />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', '/assets/image.jpg');
});

it('should render a video from video props', () => {
    render(<ThumbnailVideo thumbnail={'/assets/image.jpg'} videoPreview={'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=0'} />);

    expect(screen.getByTestId('video-preview')).toHaveAttribute('src', 'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=0');
});

it('should play video when we hover the image', () => {
    render(<ThumbnailVideo thumbnail={'/assets/image.jpg'} videoPreview={'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=0'} />);

    fireEvent.mouseOver(screen.getByRole('img'));

    expect(screen.getByTestId('video-preview')).toHaveAttribute('src', 'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=1');
});

it('should pause video when we hover out the image', () => {
    render(<ThumbnailVideo thumbnail={'/assets/image.jpg'} videoPreview={'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=0'} />);

    fireEvent.mouseOver(screen.getByRole('img'));
    fireEvent.mouseLeave(screen.getByRole('img'));

    expect(screen.getByTestId('video-preview')).toHaveAttribute('src', 'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=0');
});