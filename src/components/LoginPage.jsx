import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente LoginPage
 * Página de inicio de sesión con validación de formulario
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onLogin - Función callback cuando el login es exitoso
 * @param {Function} props.onSwitchToRegister - Función para cambiar a registro
 */
const LoginPage = ({ onLogin, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Maneja cambios en los campos del formulario
   * @param {Event} e - Evento del input
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  /**
   * Valida el formulario antes de enviar
   * @returns {boolean} true si el formulario es válido
   */
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Maneja el envío del formulario
   * @param {Event} e - Evento del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    
    if (validateForm()) {
      // Simulación de login exitoso
      setSuccessMessage('✅ Inicio de sesión exitoso');
      
      // Llamar callback si existe
      if (onLogin) {
        onLogin(formData);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 fw-bold">
                🔐 Iniciar Sesión
              </h2>
              
              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password}
                    </div>
                  )}
                </div>
                
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success btn-lg">
                    Iniciar Sesión
                  </button>
                  
                  <button 
                    type="button" 
                    className="btn btn-link"
                    onClick={onSwitchToRegister}
                  >
                    ¿No tienes cuenta? Regístrate aquí
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Definición de PropTypes para validación de propiedades
 */
LoginPage.propTypes = {
  onLogin: PropTypes.func,
  onSwitchToRegister: PropTypes.func,
};

export default LoginPage;
