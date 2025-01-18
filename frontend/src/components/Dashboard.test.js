import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders Dashboard and runs simulation', async () => {
	render(<Dashboard />);
	const stressLevelInput = screen.getByLabelText(/Stress Level/i);
	fireEvent.change(stressLevelInput, { target: { value: '0.5' } });
	fireEvent.click(screen.getByText('Run Simulation'));
	const result = await screen.findByText(/Simulation Results:/i);
	expect(result).toBeInTheDocument();
});
