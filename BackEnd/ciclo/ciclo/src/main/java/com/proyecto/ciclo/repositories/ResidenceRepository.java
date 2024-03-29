
package com.proyecto.ciclo.repositories;

import com.proyecto.ciclo.entities.Residence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidenceRepository extends JpaRepository<Residence, Long> {
    
}
