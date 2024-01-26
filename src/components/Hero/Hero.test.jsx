import Hero from '.';
import { fireEvent, render, screen } from '@testing-library/react';

it('should render Hero', () => {
    render(<Hero />);
});

it('should render an image with src', () => {
    render(<Hero />);

    const heroImage = screen.getByRole('img');

    expect(heroImage).toHaveAttribute("src", "/assets/heroImage.jpg");
});

it('should render an hero info with description and two play buttons', () => {
    render(<Hero />);

    // If using getAll it will be returned as array
    const heroDescription = screen.getByText("a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023.");
    const playButton = screen.getByRole('button', {
        name: "Play"
    });
    const moreInfoButton = screen.getByRole('button', {
        name: "More Info"
    });


    expect(heroDescription).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
    expect(moreInfoButton).toBeInTheDocument();
});

it('should call onPlayClick props on button play clicked', () => {
    const playClickSpy = jest.fn();

    render(<Hero onPlayClick={playClickSpy} />);
    
    const playButton = screen.getByRole('button', {
        name: "Play"
    });

    fireEvent.click(playButton);

    expect(playClickSpy).toHaveBeenCalledTimes(1);
});

it('should call onMoreInfoClick props on button more info clicked', () => {
    const moreInfoClickSpy = jest.fn();

    render(<Hero onMoreInfoClick={moreInfoClickSpy} />);
    
    const moreInfoButton = screen.getByRole('button', {
        name: "More Info"
    });

    fireEvent.click(moreInfoButton);

    expect(moreInfoClickSpy).toHaveBeenCalledTimes(1);
});