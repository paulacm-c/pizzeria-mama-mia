import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente RegisterPage
 * Página de registro de nuevos usuarios con validación completa
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onRegister - Función callback cuando el registro es exitoso
 * @param {Function} props.onSwitchToLogin - Función para cambiar a login
 */
const RegisterPage = ({ onRegister, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (formData.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }
    
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
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
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
      // Simulación de registro exitoso
      setSuccessMessage('✅ ¡Registro exitoso! Bienvenido a Pizzería Mamma Mia');
      
      // Llamar callback si existe
      if (onRegister) {
        onRegister(formData);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 fw-bold">
                📝 Registrarse
              </h2>
              
              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Nombre completo:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}
                </div>
                
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
                  <small className="text-muted">
                    Mínimo 6 caracteres
                  </small>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label fw-bold">
                    Confirmar Contraseña:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••"
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Crear Cuenta
                  </button>
                  
                  <button 
                    type="button" 
                    className="btn btn-link"
                    onClick={onSwitchToLogin}
                  >
                    ¿Ya tienes cuenta? Inicia Sesión
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
RegisterPage.propTypes = {
  onRegister: PropTypes.func,
  onSwitchToLogin: PropTypes.func,
};

export default RegisterPage;
