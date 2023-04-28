// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<div class="App">
			<nav class="navbar navbar-light bg-primary mb-4">
					<h1 class="navbar-brand mx-auto">Bootstrap Sign in</h1>
			</nav>

			<form class="mx-auto w-50">
				<div class="mb-3">
					<label for="email-sign-in" class="form-label">Email</label>
					<input type="email" class="form-control" id="email-sign-in"/>
				</div>
				<div class="mb-3">
					<label for="password-sign-in" class="form-label">Password</label>
					<input type="password" class="form-control" id="password-sign-in"/>
				</div>
				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
					<label class="form-check-label" htmlFor="exampleCheck1">Remember My Password</label>
				</div>
					<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	);
}

export default App;
