import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("App",()=>{
  it("should display an X",()=>{
            render(<App/>);
            const gameBoard=screen.getByTestId("gameBoard");
            expect(gameBoard).not.toBeNull();
            expect(gameBoard.textContent).toBe("");
      });

  it("should render a button",()=>{
        render(<App/>);
        const button=screen.getAllByRole("button");
        expect(button).not.toBeNull();
      });

  it("should render 9 buttons",()=>{
        render(<App/>);
        const button=screen.getAllByRole("button");
        expect(button.length).toBe(9);
      });

  it("should be able to click the button",()=>{
        render(<App/>);
        const button=screen.getAllByRole("button")[0];
        fireEvent.click(button);
        expect(button.textContent).toBe("X");
      });

  it("should render X in the square when click",()=>{
        render(<App/>);
        const button =screen.getAllByRole("button")[0];
        fireEvent.click(button);
        expect(button.textContent).toBe("X");
      });

      it("should render O on the second move",()=>{
        render(<App/>);
        const Square=screen.getAllByRole("button");
        fireEvent.click(Square[0]);
        expect(Square[0].textContent).toBe("X");
        fireEvent.click(Square[1]);
        expect(Square[1].textContent).toBe("O");
      });

      it("should display token on the square only when it is empty",()=>{
            render(<App/>);
            const square=screen.getAllByRole("button");
            fireEvent.click(square[0]);
            expect(square[0].textContent).toBe("X");
            fireEvent.click(square[0]);
            expect(square[0].textContent).toBe("X");
      });

});