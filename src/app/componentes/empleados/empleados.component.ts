import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmpleadosService } from '../../servicios/empleados.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit{
  crearEmpleado: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder,
    private empleadoService: EmpleadosService,
    private toastr: ToastrService
  ) {
    this.crearEmpleado = this.fb.group({
      cedula: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      apellidoUno: ['', Validators.required],
      apellidoDos: ['', Validators.required],
      nameUno: ['', Validators.required],
      grupoRH: ['', Validators.required],
      sexo: ['', Validators.required],
      ciudadNacimiento: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', Validators.required],
      libreta: ['', Validators.required],
      ciudadReside: ['', Validators.required],
      eps: ['', Validators.required],
      fondoPension: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  agregarEmpleado(){
    this.enviado = true;
    if(this.crearEmpleado.invalid){
      return;
    }
    const empleado: any ={
      cedula: this.crearEmpleado.value.cedula,
      fechaNacimiento: this.crearEmpleado.value.fechaNacimiento,
      apellidoUno: this.crearEmpleado.value.apellidoUno,
      apellidoDos: this.crearEmpleado.value.apellidoDos,
      nameUno: this.crearEmpleado.value.nameUno,
      grupoRH: this.crearEmpleado.value.grupoRH,
      sexo: this.crearEmpleado.value.sexo,
      ciudadNacimiento: this.crearEmpleado.value.ciudadNacimiento,
      estadoCivil: this.crearEmpleado.value.estadoCivil,
      direccion: this.crearEmpleado.value.direccion,
      celular: this.crearEmpleado.value.celular,
      correo: this.crearEmpleado.value.correo,
      libreta: this.crearEmpleado.value.libreta,
      ciudadReside: this.crearEmpleado.value.ciudadReside,
      eps: this.crearEmpleado.value.eps,
      fondoPension: this.crearEmpleado.value.fondoPension,
      fechaDeCreacion: new Date()
    }
    this.empleadoService.agregarEmpleado(empleado).then(() =>{
      this.toastr.success("El empleado fue registrado con exito", "Empleado registrado")
    }).catch(error => {
      console.log(error);
    })
    this.crearEmpleado.reset();
  }
  limpiarPantalla(){
    this.crearEmpleado.reset();
  }
  
}
