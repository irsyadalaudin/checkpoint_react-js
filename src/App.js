import './App.css';														// IMPORTING `CSS` FILE
import 'bootstrap/dist/css/bootstrap.min.css'							// IMPORTING `bootstrap` FILE
import image from './img/office.png';									// IMPORTING AN `image` FILE
import {useState} from 'react';											// IMPORTING THE `useState` HOOK FROM THE REACT LIBRARY

function App() {														// `App` COMPONENT DECLARATION
	const [showSignIn, setShowSignIn] = useState(true);					// DECLARE AND INITIALIZE A `state` VARIABLE AND A `setter` FUNCTION FOR `showing/hiding` THE `sign in` FORM
	const [disableSignUp, setDisableSignUp] = useState(false);			// DECLARE AND INITIALIZE A `state` VARIABLE AND A `setter` FUNCTION FOR `disabling/enabling` THE `sign in` FORM

	const handleToggleSignIn = () => {									// DEFINE A FUNCTION FOR HANDLING THE `sign in` BUTTON CLICK EVENT
		setShowSignIn(true);											// SET THE `state` VARIABLE FOR `showing/hiding` THE `sign in` FORM TO `true`
		setDisableSignUp(false);										// SET THE `state` VARIABLE FOR `disabling/enabling` THE `sign up` BUTTON TO `false`
		document.querySelector('#sign-in-btn').disabled = true;			// DISABLE THE `sign in` BUTTON
	};

	const handleToggleSignUp = () => {									// DEFINE A FUNCTION FOR HANDLING THE `sign up` BUTTON CLICK EVENT
		setShowSignIn(false);											// SET THE `state` VARIABLE FOR `showing/hiding` THE `sign in` FORM TO `false`
		setDisableSignUp(true);											// SET THE `state` VARIABLE FOR `disabling/enabling` THE `sign up` BUTTON TO `true`
		document.querySelector('#sign-up-btn').disabled = true;			// DISABLE THE `sign up` BUTTON
	};

	return (															// RETURN THE JSX CODE
		<div class='App wrapper w-75 mt-5 m-auto d-flex justify-content-center bg-secondary text-white rounded-4'>
			
				{/* OPENING ROW */}
				<div class ='row align-items-center gx-0'>

					{/* LEFT COLUMN */}
					<div class='col'>

						{/* SIGN IN */}
						<div class='d-flex justify-content-center left'>

							<form class='w-75 mt-5 mb-5' id='showSignIn'  style={{ display: showSignIn ? 'block' : 'none' }}>
								<div class='btn-container d-flex justify-content-center mx-auto mb-3' style={{ width: '200px' }}>
									<button type='button' class='btn btn-warning btn-sm d-flex align-items-center rounded-0 rounded-start-3' id='sign-in-btn' onClick={handleToggleSignIn} disabled={showSignIn ? true : false}>sign in</button>	{/* EVENT HANDLERS FOR `sign in` BUTTON ELEMENT */}
									<button type='button' class='btn btn-warning btn-sm d-flex align-items-center rounded-0 rounded-end-3' id='sign-up-btn' onClick={handleToggleSignUp} disabled={disableSignUp}>sign up</button>					{/* EVENT HANDLERS FOR `sign up` BUTTON ELEMENT */}
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
								<div class='btn-container d-flex justify-content-center mx-auto mb-3' style={{ width: '200px' }}>
									<button type='button' class='btn btn-warning btn-sm d-flex align-items-center rounded-0 rounded-start-3' id='sign-in-btn' onClick={handleToggleSignIn} disabled={showSignIn ? true : false}>sign in</button>	{/* EVENT HANDLERS FOR `sign in` BUTTON ELEMENT */}
									<button type='button' class='btn btn-warning btn-sm d-flex align-items-center rounded-0 rounded-end-3' id='sign-up-btn' onClick={handleToggleSignUp} disabled={disableSignUp}>sign up</button>					{/* EVENT HANDLERS FOR `sign up` BUTTON ELEMENT */}
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
								<div class='mb-3'>
									<input type='password' class='form-control' id='password-sign-up' placeholder='Repeat your Password'/>
								</div>
								<button type='submit' class='btn btn-warning'>Submit</button>
							</form>
						</div>

					</div> {/* CLOSING LEFT COLUMN */}

					{/* RIGHT COLUMN */}
					<div class='col' id='right-column'>
						<div class='d-flex justify-content-center right pb-4'>
							<img src={image} alt='office-img' class='w-100' id='office-img'/>		{/* `image` ELEMENT, WHICH IS PASSED AS A PROP TO THIS ELEMENT */}
						</div>
					</div>

				</div> {/* CLOSING ROW*/}
		</div>
	);
}

export default App;