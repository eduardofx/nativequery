import {  getConnection } from "typeorm";

export const nativeQuery = async (query: string, param: any) => {

  const queryRunner = getConnection().createQueryRunner()
  const processquery = await queryRunner.query(query,param)
  await queryRunner.release()
  return processquery

}