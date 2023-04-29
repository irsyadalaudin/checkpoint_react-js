import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from './img/office.png';
import {useState} from 'react';

function App() {
	const [showSignIn, setShowSignIn] = useState(true);
	const [disableSignUp, setDisableSignUp] = useState(false);

	const handleToggleSignIn = () => {
		setShowSignIn(true);
		setDisableSignUp(false);
		document.querySelector('#sign-in-btn').disabled = true;
	};

	const handleToggleSignUp = () => {
		setShowSignIn(false);
		setDisableSignUp(true);
		document.querySelector('#sign-up-btn').disabled = true;
	};

	return (
		<div class='App'>

			<div class='container w-75 mt-5 m-auto d-flex justify-content-center bg-secondary text-white rounded-4'>
			
				{/* OPENING ROW */}
				<div class ='row align-items-center gx-0'>

					{/* LEFT COLUMN */}
					<div class='col'> {/* border jangan lupa dihapus */}

						{/* SIGN IN */}
						<div class='d-flex justify-content-center left'>

							<form class='w-75 mt-5 mb-5' id='showSignIn'  style={{ display: showSignIn ? 'block' : 'none' }}>
								<div class='d-flex justify-content-center'>
									<button type='button' class='btn btn-warning btn-sm mb-3 me-3' id='sign-in-btn' onClick={handleToggleSignIn} disabled={showSignIn ? true : false}>sign in</button>
									<button type='button' class='btn btn-warning btn-sm mb-3' id='sign-up-btn' onClick={handleToggleSignUp} disabled={disableSignUp}>sign up</button>
								</div>

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
							<form class='w-75 mt-5 mb-5' style={{ display: showSignIn ? 'none' : 'block' }}>
								<div class='d-flex justify-content-center'>
									<button type='button' class='btn btn-warning btn-sm mb-3 me-3' id='sign-in-btn' onClick={handleToggleSignIn} disabled={showSignIn ? true : false}>sign in</button>
									<button type='button' class='btn btn-warning btn-sm mb-3' id='sign-up-btn' onClick={handleToggleSignUp} disabled={disableSignUp}>sign up</button>
								</div>

								<div class='mb-3'>
									<input type='text' class='form-control mt-20' id='name-sign-up' aria-describedby='emailHelp' placeholder='Name'/>
								</div>
								<div class='mb-3'>
									<input type='email' class='form-control mt-20' id='email-sign-up' aria-describedby='emailHelp' placeholder='Email'/>
								</div>
								<div class='mb-3'>
									<input type='password' class='form-control' id='password-sign-up' placeholder='Password'/>
								</div>
									<button type='submit' class='btn btn-warning'>Submit</button>
							</form>
						</div>

					</div> {/* CLOSING LEFT COLUMN */}

					{/* RIGHT COLUMN */}
					<div class='col' id='right-column'>  {/* border jangan lupa dihapus */}
						<div class='d-flex justify-content-center right pb-4'>
							<img src={image} alt='office-img' class='w-100' id='office-img'/>
						</div>
					</div>

				</div> {/* CLOSING ROW*/}
			</div>
		</div>
	);
}

export default App;