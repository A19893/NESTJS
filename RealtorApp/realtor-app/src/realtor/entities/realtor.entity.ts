import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Realtor {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  address: string;

  @Column({ type: 'int', length: 8 })
  number_of_bedrooms: number;

  @Column({ type: 'int', length: 40 })
  number_of_bathrooms: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'date' })
  listed_date: Date;

  @Column({ type: 'float', length: 10 })
  price: number;

  @Column({ type: 'enum', enum: ['RESIDENTIAL', 'CONDO'] })
  propertyType: string;
}
