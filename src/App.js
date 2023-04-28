import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from './img/office.png';

function App() {
	return (
		<div class='App'>
			<nav class='navbar navbar-light bg-warning'>
					<h1 class='navbar-brand mx-auto'>Bootstrap Sign in</h1>
			</nav>

			{/* OPENING ROW */}
			<div class ='row gx-0'>

				{/* LEFT COLUMN */}
				<div class='col border border-primary'> {/* border jangan lupa dihapus */}


					{/* SIGN IN */}
					<div class='d-flex justify-content-center left'>

						<form class='w-75 mt-5 mb-5 '>
							<button type='button' class='btn btn-warning btn-sm mb-3 me-3'>sign in</button>
							<button type='button' class='btn btn-warning btn-sm mb-3'>sign up</button>

							<div class='mb-3'>
								<input type='email' class='form-control' id='email-sign-in' aria-describedby='emailHelp' placeholder='Email'/>
							</div>
							<div class='mb-3'>
								<input type='password' class='form-control' id='password-sign-in' placeholder='Password'/>
							</div>
							<div class="mb-3 form-check">
								<input type='checkbox' class='form-check-input' id='checkbox-sign-in'/>
								<label class='form-check-label' htmlFor='checkbox-sign-in'>Remember My Password</label>
							</div>
								<button type='submit' class='btn btn-warning'>Submit</button>
						</form>
					</div>

					{/* SIGN UP */}
					<div class='d-flex justify-content-center left'>
						<form class='w-75 mb-5'>
							<div class='mb-3'>
								<input type='email' class='form-control mt-20' id='email-sign-up' aria-describedby='emailHelp' placeholder='Email'/>
							</div>
							<div class='mb-3'>
								<input type='password' class='form-control' id='password-sign-up' placeholder='Password'/>
							</div>
							<div class="mb-3 form-check">
								<input type='checkbox' class='form-check-input' id='checkbox-sign-up'/>
								<label class='form-check-label' htmlFor='checkbox-sign-in'>Remember My Password</label>
							</div>
								<button type='submit' class='btn btn-warning'>Submit</button>
						</form>
					</div>

				</div> {/* CLOSING LEFT COLUMN */}

				{/* RIGHT COLUMN */}
				<div class='col border border-danger' id='right-column'>  {/* border jangan lupa dihapus */}
					<div class='d-flex justify-content-center right'>
						<img src={image} alt='office-img' class='w-75' id='office-img'/>
						{/* <h1>ini buat gambar nanti</h1> */}
					</div>
				</div>

			</div> {/* CLOSING ROW*/}

		</div>
	);
}

export default App;